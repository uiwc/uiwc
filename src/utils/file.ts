import { toMemorySize } from './number';
import { isEmpty, isString } from './object';

export function megasToBytes(megas: number): number {
  return megas * 1024 * 1024;
}

export function bytesToMegas(bytes: number): number {
  return bytes / 1024 / 1024;
}

export function humanizeFileSize(bytes: number): string {
  return toMemorySize(bytes);
}

export function toBase64(file: any) {
  return new Promise<any>((resolve, reject) => {
    if (!file) {
      resolve(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function isFileImage(file: File | null): boolean {
  return file ? file.type.split('/')[0] === 'image' : false;
}

export function getFileExtension(name: any): boolean {
  return isEmpty(name) || !isString(name) ? null : name.split('.').pop();
}

export function imageExists(src: string | null | undefined): boolean {
  if (!src) {
    return false;
  }

  try {
    const http = new XMLHttpRequest();

    http.open('HEAD', src, false);
    http.send();

    return http.status !== 404;
  } catch (error) {
    return false;
  }
}

export function saveBlob(data: any, fileName = 'file.txt') {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
}
