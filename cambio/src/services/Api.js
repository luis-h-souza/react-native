import axios from 'axios'

export const apiListar = axios.create({
  baseURL: `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json`
})
