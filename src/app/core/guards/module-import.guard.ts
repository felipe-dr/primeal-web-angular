export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} já foi carregado. Importar ${moduleName} somente no AppModule.`);
  }
}
