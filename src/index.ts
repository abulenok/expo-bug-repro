import NvmModule from './NvmModule';

export async function hello() {
  return NvmModule.hello({"foo":"boo"});
}