import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenValidatorComponent } from './token-validator.component';

describe('TokenValidatorComponent', () => {
  let component: TokenValidatorComponent;
  let fixture: ComponentFixture<TokenValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
