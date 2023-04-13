"use client"
import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk'
import { SocialWallet } from '@zerodevapp/social-wallet';
import { useState, useMemo } from 'react';

function RpcProviderExample() {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const socialWallet = useMemo(() => {
    return new SocialWallet()
  }, [])
  
  const createWallet = async () => {
    setLoading(true)
    const signer = await getZeroDevSigner({
      projectId: process.env.PROJECT_ID,
      owner: await getSocialWalletOwner(process.env.PROJECT_ID, socialWallet)
    })
    setAddress(await signer.getAddress())
    setLoading(false)
  }

  const disconnect = async () => {
    await socialWallet.disconnect()
    setAddress('')
  }

  const connected = !!address
  return (
    <div className='flex flex-col space-y-6'>
      <div className='flex justify-center'>
        {!connected && <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={createWallet} disabled={loading}>{ loading ? 'Connecting...' : 'Create Wallet'}</button>}
        
        {connected && 
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={disconnect} disabled={loading}>{`${address.slice(0,5)} ... ${address.slice(address.length-4)}`}</button>
        }
      </div>
      {
        connected &&
        <h1>Thank you for connecting with Panaverse DAO!</h1>
      }
    </div>
  )
}

export default RpcProviderExample;

