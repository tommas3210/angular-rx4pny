import { DwIdDirective } from './dw-id.directive';

export function replaceOrInsertTemplate(source: DwIdDirective, target: DwIdDirective): boolean {

  if (target.dwId === undefined) {
    return false;
  }
  if (source.dwReplace === target.dwId) {
    target.replaceCurrent(source);
    return true;
  }

  if (source.dwInsertBefore === target.dwId) {
    target.insertBefore(source);
    return true;
  }

  if (source.dwInsertAfter === target.dwId) {
    target.insertAfter(source);
    return true;
  }
  return false;
}
