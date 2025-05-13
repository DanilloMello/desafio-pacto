import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCandidatosComponent} from './detail-candidatos.component';

describe('DetailCandidatosComponent', () => {
  let component: DetailCandidatosComponent;
  let fixture: ComponentFixture<DetailCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCandidatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
