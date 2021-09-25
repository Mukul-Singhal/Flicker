import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { store } from "../store/store";
import {
  connect,
  LocalAudioTrack,
  LocalVideoTrack,
  LocalDataTrack,
} from "twilio-video";
import { setShowOverlay, setMessages } from "../store/actions";

const audioConstraints = {
  video: false,
  audio: true,
};

const videoConstraints = {
  audio: true,
  video: {
    width: 640,
    height: 480,
  },
};

let dataChannel = null;

export const getTokenFromTwilio = async (setAccessToken, identity) => {
  const randomId = uuidv4();

  const response = await axios.get(
    `https://flicker-backend.herokuapp.com/api/token-service?identity=${randomId}${identity}`
  );

  const data = response.data;

  if (data.accessToken) {
    setAccessToken(data.accessToken);
  }
};

export const connectToRoom = async (
  accessToken,
  roomId = "test-room",
  setRoom
) => {
  const onlyWithAudio = store.getState().connectOnlyWithAudio;
  const constraints = onlyWithAudio ? audioConstraints : videoConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(async (stream) => {
      let tracks;

      // create data track for messages
      const audioTrack = new LocalAudioTrack(stream.getAudioTracks()[0]);
      const dataTrack = new LocalDataTrack();
      dataChannel = dataTrack;
      let videoTrack;

      if (!onlyWithAudio) {
        videoTrack = new LocalVideoTrack(stream.getVideoTracks()[0]);
        tracks = [audioTrack, videoTrack, dataTrack];
      } else {
        tracks = [audioTrack, dataTrack];
      }

      const room = await connect(accessToken, {
        name: roomId,
        tracks,
      });
      console.log("succesfully connected with twilio room");
      console.log(room);
      setRoom(room);
      store.dispatch(setShowOverlay(false));
    })
    .catch((err) => {
      console.log(
        "Error occurred when trying to get an access to local devices"
      );
      console.log(err);
    });
};

export const checkIfRoomExists = async (roomId) => {
  const response = await axios.get(
    `https://flicker-backend.herokuapp.com/api/room-exists?roomId=${roomId}`
  );

  return response.data.roomExists;
};

// data channel utils

export const sendMessageUsingDataChannel = (
  content,
  messageCreatedByMe = false
) => {
  const identity = store.getState().identity;

  const ownMessage = {
    identity,
    content,
    messageCreatedByMe,
  };

  addMessageToMessenger(ownMessage);

  const MessageToSent = { identity, content };

  const stringifiedMessage = JSON.stringify(MessageToSent);

  dataChannel.send(stringifiedMessage);
};

export const addMessageToMessenger = (message) => {
  const messages = [...store.getState().messages];
  messages.push(message);
  store.dispatch(setMessages(messages));
};
