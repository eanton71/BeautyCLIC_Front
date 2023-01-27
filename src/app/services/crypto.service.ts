import { Injectable } from '@angular/core';
import {util,pki,cipher,md} from 'node-forge';
import { environment } from '../../environments/environment';
import { Pseudogen } from '../models/pseudogen';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  encryptData(data:string):string{

    const pkey = pki.publicKeyFromPem(environment.pubkey);
    const cipherData = pkey.encrypt(data);
    const dataB64 = util.encode64(cipherData);
    return dataB64;
  }

  encryptSecret(data:string):string{
    const pkey = pki.publicKeyFromPem(environment.pubkey);
    const ciphered = pkey.encrypt(data);
    return util.encode64(ciphered);
  }

  signEncrypted(data:string):string{
    console.log('ciphered: ',data);
    const priv = pki.privateKeyFromPem(environment.privkey);
    //const pub = pki.publicKeyFromPem(environment.pubkey);
    const md256 = md.sha256.create();
    md256.update(data,'utf8');
    let signature =  priv.sign(md256);

    let encoded = util.encode64(signature);
    //console.log('firma:',encoded);
    //console.log(pub.verify(md256.digest().getBytes(),util.decode64(encoded)));
    return util.encode64(signature);
  }

  //data encryption with private key
  encryptJson(data:object,key:string,vector:string):string{

    const c = cipher.createCipher('AES-CBC',key);
    c.start({iv:vector});
    c.update(util.createBuffer(JSON.stringify(data),'utf8'));
    c.finish();

    return util.encode64(c.output.getBytes());

  }

  getRandomString(length:number):string{

    let result:string = '';

    for(let i = 0; i < length; i++){
      result += Pseudogen.randomChars.charAt(Math.floor(Math.random() * Pseudogen.randomChars.length));
    }

    return result;
  }
}
