import { education } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Timeline from './ui/Timeline';

export default function Education() {
  return (
    <section id="education" className="bg-bg-secondary px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <SectionHeader eyebrow="Academics" title="Education" />
        <Timeline entries={education} />
      </div>
    </section>
  );
}
