import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component =  new AppComponent();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'practica3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('practica3');
  });

  //PRUEBA UNITARIA PARA VALIDAR CI CON JENKINS
  it('Prueba unitaria para Jenkins, validad Titulo de APP',()=>{
    let validateTitle: string = component.title; 
    expect(validateTitle).toEqual('practica3');
  });

});
