import { documentDirectory, writeAsStringAsync, readAsStringAsync, deleteAsync, readDirectoryAsync } from "expo-file-system" 

export const docFolder = `${documentDirectory}`


export async function setKey(key: string, value: any){
    const writtenContents = await writeAsStringAsync(`${docFolder}${key}`, value)
    return writtenContents
}

export async function getKey(key: string):Promise<any> {
    try {
        const value = await readAsStringAsync(`${docFolder}${key}`)
        return value
      } catch (error) {
        return null
      }
}

export async function removeKey(key: string) {
    await deleteAsync(
        `${docFolder}${key}`,
        { idempotent: true } // don't throw an error if there is no file or directory at this URI
      )
}

export async function getAllKey(): Promise<string[]> {
    const keys = await readDirectoryAsync(`${docFolder}`)
    return keys
}