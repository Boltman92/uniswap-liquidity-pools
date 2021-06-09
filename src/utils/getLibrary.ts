import { Web3Provider, ExternalProvider } from '@ethersproject/providers'

export default function getLibrary(provider: ExternalProvider): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 8000
  return library
}
