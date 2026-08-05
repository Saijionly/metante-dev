import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { EmailOctopusForm } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { HeroWork } from "@/components/HeroWork";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="24"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8">
            <Row gap="24" vertical="center" horizontal="center" wrap>
              {about.avatar.display && (
                <Avatar src={person.avatar} size="xl" />
              )}
              <Column horizontal="center" align="center">
                <Heading wrap="balance" variant="display-strong-xl" style={{ lineHeight: 1.02 }}>
                  {person.firstName.split(" ")[0].toLowerCase()}
                </Heading>
                <Heading wrap="balance" variant="display-strong-xl" style={{ lineHeight: 1.02 }}>
                  {person.lastName.toLowerCase()}
                </Heading>
              </Column>
            </Row>
          </RevealFx>

          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingTop="16" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx paddingTop="4" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
              label="Explore my story"
            />
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY="16" delay={0.5} fillWidth>
        <Column fillWidth gap="16" paddingTop="24">
          <Text variant="label-default-s" onBackground="neutral-weak" wrap="balance">
            selected work
          </Text>
          <HeroWork />
        </Column>
      </RevealFx>

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[1]} />
      <EmailOctopusForm />
    </Column>
  );
}