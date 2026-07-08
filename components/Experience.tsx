import { experience } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Timeline from './ui/Timeline';

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-secondary px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Research and engineering roles focused on NLP, systems performance, and applied AI."
        />
        <Timeline entries={experience} />
      </div>
    </section>
  );
}
