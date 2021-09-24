import { promises as fs } from 'fs'
import path from 'path'

export default async function getFilesInDirectory(dir) {
    // Get directory path
    const directory = path.join(
        path.join(process.cwd(), "content"), 
        dir
    );

    // Get all fnames, then remove the file extension
    const filenames = (await fs.readdir(directory)).map(fname => fname.split('.').slice(0, -1).join('.'));

    return filenames;
}