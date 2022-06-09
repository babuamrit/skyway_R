import axios from "axios";

async function get(url ) {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    return { success: false, result: err };
  }
}

export default get;
