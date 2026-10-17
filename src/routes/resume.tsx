import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ResumeSection, Tag } from "@/components/resume/ResumeSection";
import { ExperienceTimeline } from "@/components/resume/ExperienceTimeline";
import { Credentials } from "@/components/resume/Credentials";
import { SelectedProjects } from "@/components/resume/SelectedProjects";
import { ResumeFooter } from "@/components/resume/ResumeFooter";
import { certifications, coreCompetencies, education, professionalSummary } from "@/data/resume";
import { skillGroups } from "@/data/skills";

const title = "Resume — Data Analyst | Innocent";
const description =
  "Innocent's Data Analyst resume: professional summary, experience, education, technical skills across Python, SQL, Excel, Power BI, AI and automation, plus selected analytics case studies.";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/resume" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
    scripts: [
      jsonLdScript(webPageSchema({ path: "/resume", name: title, description, type: "WebPage" })),
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="resume-page">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:py-20">
        <ResumeHeader />

        <div className="resume-layout mt-12 grid items-start gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
          <div className="space-y-12">
            <ResumeSection label="Profile" title="Professional summary">
              <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
                {professionalSummary.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection label="Experience" title="Work experience">
              <ExperienceTimeline />
            </ResumeSection>

            <ResumeSection label="Evidence" title="Selected projects">
              <SelectedProjects />
            </ResumeSection>
          </div>

          <aside className="space-y-12">
            {education.length > 0 || certifications.length > 0 ? (
              <ResumeSection label="Credentials" title="Education & certifications">
                <div className="grid gap-8 md:grid-cols-2">
                  {education.length > 0 ? <Credentials title="Education" items={education} /> : null}
                  {certifications.length > 0 ? <Credentials title="Certifications" items={certifications} /> : null}
                </div>
              </ResumeSection>
            ) : null}

            <ResumeSection label="Skills" title="Technical skills">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map((group) => (
                  <div key={group.id}>
                    <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                      {group.title}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection label="Strengths" title="Core competencies">
              <ul className="flex flex-wrap gap-2">
                {coreCompetencies.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </ResumeSection>
          </aside>
        </div>

        <ResumeFooter />
      </div>
    </div>
  );
}
