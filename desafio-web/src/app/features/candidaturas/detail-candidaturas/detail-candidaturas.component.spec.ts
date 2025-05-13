import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailCandidaturasComponent } from './detail-candidaturas.component';


describe('DetailVagaComponent', () => {
  let component: DetailCandidaturasComponent;
  let fixture: ComponentFixture<DetailCandidaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCandidaturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
