import tf from '@tensorflow/tfjs-node';

const loadModel = async () => {
  const modelUrl = process.env.MODEL_URL || 'https://storage.googleapis.com/asclepsius/model-in-prod/model.json';
  return await tf.loadGraphModel(modelUrl);
};

export default loadModel;
