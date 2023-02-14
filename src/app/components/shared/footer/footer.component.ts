import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewslistService } from 'app/newslist.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  newsForm: FormGroup;
  newsAsk: boolean;  
  submited: boolean;

  accepting: FormControl;
  email: FormControl;
  

  constructor(private fb:FormBuilder, private newslistService: NewslistService){
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.accepting = new FormControl(0,[Validators.required, Validators.requiredTrue]);

    this.newsForm = new FormGroup({      
      email: this.email,
      accepting: this.accepting,      
    })     

    this.newsAsk = true;     
    this.submited = false;
  }


  ngOnInit(){
    this.newsForm.reset();

    this.newslistService.isLoggedUserSubscribed().subscribe(result=>{
      console.log('Resultado de  observable isLoggedUserSubscribed: ', result);
      if (result) this.newsAsk = false;
    })
  }

  send():void{
    console.log('en sending');
    this.submited = true;  

    const {email, accepting} = this.newsForm.getRawValue();
    
    console.log('Accepting es: ', accepting);
    console.log('EmaIL IS: ', email);

    if (this.accepting.errors || this.email.errors) {
      console.log('There are errors in form:  accepting: ', this.accepting.errors, 'email: ', this.email.errors);
      return; 
    }

    this.newslistService.addEmail(email).subscribe(result=>{      
      console.log('Resultado de newslist addEmail: ', result);
      if (result) this.newsAsk = false;
      else {
        console.log('ha habido error contactando el servidor');
        this.newsForm.enable();
        this.newsForm.reset();
      }
    })

    this.newsForm.disable();        
  }

}

