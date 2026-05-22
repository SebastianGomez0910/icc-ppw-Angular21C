import { Component } from '@angular/core';
import { GlassStatCard } from './components/glass-stat-card/glass-stat-card';
import { GradientCtaBanner } from './components/gradient-cta-banner/gradient-cta-banner';
import { FeatureChipList } from './components/feature-chip-list/feature-chip-list';

@Component({
  selector: 'app-ui-components-page',
  imports: [GlassStatCard, GradientCtaBanner, FeatureChipList],
  templateUrl: './ui-components-page.html',
})
export class UiComponentsPage {

  readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ]
}
