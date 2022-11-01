// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import AllinbitsCosmosCashAllinbitsCosmoscashDid from './allinbits/cosmos-cash/allinbits.cosmoscash.did'
import AllinbitsCosmosCashAllinbitsCosmoscashIssuer from './allinbits/cosmos-cash/allinbits.cosmoscash.issuer'
import AllinbitsCosmosCashAllinbitsCosmoscashRegulator from './allinbits/cosmos-cash/allinbits.cosmoscash.regulator'
import AllinbitsCosmosCashAllinbitsCosmoscashVerifiablecredential from './allinbits/cosmos-cash/allinbits.cosmoscash.verifiablecredential'
import CosmosCashV3AllinbitsCosmoscashDid from './cosmos-cash/v3/allinbits.cosmoscash.did'
import CosmosCashV3AllinbitsCosmoscashIssuer from './cosmos-cash/v3/allinbits.cosmoscash.issuer'
import CosmosCashV3AllinbitsCosmoscashRegulator from './cosmos-cash/v3/allinbits.cosmoscash.regulator'
import CosmosCashV3AllinbitsCosmoscashVerifiablecredential from './cosmos-cash/v3/allinbits.cosmoscash.verifiablecredential'


export default { 
  AllinbitsCosmosCashAllinbitsCosmoscashDid: load(AllinbitsCosmosCashAllinbitsCosmoscashDid, 'allinbits.cosmoscash.did'),
  AllinbitsCosmosCashAllinbitsCosmoscashIssuer: load(AllinbitsCosmosCashAllinbitsCosmoscashIssuer, 'allinbits.cosmoscash.issuer'),
  AllinbitsCosmosCashAllinbitsCosmoscashRegulator: load(AllinbitsCosmosCashAllinbitsCosmoscashRegulator, 'allinbits.cosmoscash.regulator'),
  AllinbitsCosmosCashAllinbitsCosmoscashVerifiablecredential: load(AllinbitsCosmosCashAllinbitsCosmoscashVerifiablecredential, 'allinbits.cosmoscash.verifiablecredential'),
  CosmosCashV3AllinbitsCosmoscashDid: load(CosmosCashV3AllinbitsCosmoscashDid, 'allinbits.cosmoscash.did'),
  CosmosCashV3AllinbitsCosmoscashIssuer: load(CosmosCashV3AllinbitsCosmoscashIssuer, 'allinbits.cosmoscash.issuer'),
  CosmosCashV3AllinbitsCosmoscashRegulator: load(CosmosCashV3AllinbitsCosmoscashRegulator, 'allinbits.cosmoscash.regulator'),
  CosmosCashV3AllinbitsCosmoscashVerifiablecredential: load(CosmosCashV3AllinbitsCosmoscashVerifiablecredential, 'allinbits.cosmoscash.verifiablecredential'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
