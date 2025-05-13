import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailVagaComponent } from './detail-vaga.component';


describe('DetailVagaComponent', () => {
  let component: DetailVagaComponent;
  let fixture: ComponentFixture<DetailVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailVagaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
