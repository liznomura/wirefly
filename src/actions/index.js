export const SET_TOOL = 'SET_TOOL';

let keyId = 1;
export const setTool = tool => {
  return {
    type : SET_TOOL,
    tool
  };
};