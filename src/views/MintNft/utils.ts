import { useCurrentAddressStore, useNftStore } from '@/store';
function resetNft() {
  const currentAddressStore = useCurrentAddressStore();
  const { setCurrentAddress } = currentAddressStore;
  setCurrentAddress('');

  const nftStore = useNftStore();
  const { setNftBalance } = nftStore;
  setNftBalance('0');
}

export { resetNft };
