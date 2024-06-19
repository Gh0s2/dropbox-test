import { Dropbox } from "dropbox";


const dropbox = new Dropbox({ accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN });

export default dropbox;
