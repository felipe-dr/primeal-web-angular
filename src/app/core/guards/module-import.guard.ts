/**
 * Função que previne a importação de um módulo em mais de uma vez.
 * 
 * @param {any} parentModule 
 * @param {string} moduleName 
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} já foi carregado. Importe o ${moduleName} somente no AppModule.`);
  }
}
