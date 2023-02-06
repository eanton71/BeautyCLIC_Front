import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  newsForm: FormGroup;
  newsAsk: boolean;  
  showAcceptingError: boolean;
  showEmailError: boolean;
  avanzado: number;
  hola: string;
  accepting: FormControl;
  email: FormControl;
  submited: boolean;

  constructor(private fb:FormBuilder){
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.accepting = new FormControl(0,Validators.required);

    /* this.newsForm = this.fb.group({      
      email:['', [Validators.required, Validators.email]],
      accepting:[0,Validators.requiredTrue],      
    })      */

    this.newsForm = new FormGroup({      
      email: this.email,
      accepting: this.accepting,      
    })     


    this.newsAsk = true;     
    this.showAcceptingError = false;     
    this.showEmailError = false;   
    
    this.avanzado = 1;
    this.hola = "holahola";
    this.submited = false;


  }

  avanza():void{
    this.avanzado++;
    console.log('Avanzado', this.avanzado);
  }

  auto_avanza():void{
    console.log('auto');
    setTimeout(()=>{
      this.avanza();}, 1);
    } 
    
  

  ngOnInit(){
    this.newsForm.reset();
    
  }

  send():void{
    console.log('en sending');
    this.submited = true;

    const {email, accepting} = this.newsForm.getRawValue();

    if (this.accepting.errors || this.email.errors) {return; }

    console.log('Accepting es: ', accepting);
    console.log('EmaIL IS: ', email);

    this.newsForm.reset();
    this.newsAsk = false;
    this.showAcceptingError = false;
    this.showEmailError = false;

  }

}

