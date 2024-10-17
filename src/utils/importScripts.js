import { files } from "./files.json";

const importFunc = async (src_arr) => {
  const createAppendToScript = async (src) => {
    const script = await document.createElement("script");
    script.src = src;
    script.async = true;
    script.type = "text/javascript";
    script.setAttribute("crossorigin", "anonymous");
    await document.body.appendChild(script);
  };
  try {
    for (let src of src_arr) {
      await createAppendToScript(src);
    }
  } catch (err) {
    console.log(err.message);
    return false;
  }
  return true;
};

export default async function importScripts() {
  const res = await importFunc(files);
  return res;
}

      // "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js",