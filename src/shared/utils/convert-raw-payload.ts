/**
 * @description
 * Função que converte um payload de uma requisição para um objeto com as propriedades
 * separadas por underline.
 * @param payload Payload da requisição
 * @param root Nome da propriedade raiz do objeto
 * @returns Objeto com as propriedades separadas por underline
 */
export function ConvertRawPayload(payload: any, root: string) {
  let convertedPayload = {};

  for (const key in payload) {
    const parts = key.split('_');
    if (parts.length > 1) {
      if (!convertedPayload.hasOwnProperty(parts[0])) {
        convertedPayload[parts[0]] = {};
      }
      const propertyName = parts.slice(1).join('_');
      convertedPayload[parts[0]][propertyName] = payload[key];
    } else {
      convertedPayload[key] = payload[key];
    }
  }

  convertedPayload = {
    ...convertedPayload[root],
    ...convertedPayload,
  };
  delete convertedPayload[root];

  return convertedPayload;
}
