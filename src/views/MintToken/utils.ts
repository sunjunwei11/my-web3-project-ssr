import { useCurrentAddressStore, useTokenStore } from '@/store';
function resetToken() {
  const currentAddressStore = useCurrentAddressStore();
  const { setCurrentAddress } = currentAddressStore;
  setCurrentAddress('');

  const tokenStore = useTokenStore();
  const { setTokenBalance } = tokenStore;
  setTokenBalance('0');
}

export { resetToken };
