'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconArrowRight, IconLeaf } from '@tabler/icons-react';

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: '기능', href: '/#features' },
  { label: '데이터', href: '/#stats' },
  { label: '추천받기', href: '/onboarding' },
  { label: '대시보드', href: '/dashboard' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Box
        component="header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'saturate(180%) blur(12px)',
          WebkitBackdropFilter: 'saturate(180%) blur(12px)',
          background: scrolled ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.55)',
          borderBottom: scrolled
            ? '1px solid var(--mantine-color-gray-2)'
            : '1px solid transparent',
          transition: 'background 180ms ease, border-color 180ms ease',
        }}
      >
        <Container size="xl" py={scrolled ? 10 : 14} style={{ transition: 'padding 180ms ease' }}>
          <Group justify="space-between" align="center" wrap="nowrap">
            <UnstyledButton component={Link} href="/">
              <Group gap={8} wrap="nowrap">
                <Box
                  w={30}
                  h={30}
                  style={{
                    borderRadius: 8,
                    background:
                      'linear-gradient(135deg, var(--mantine-color-green-5), var(--mantine-color-teal-6))',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'white',
                    boxShadow: '0 6px 16px -6px rgba(34,139,84,0.55)',
                  }}
                >
                  <IconLeaf size={18} stroke={2.4} />
                </Box>
                <Text fw={800} fz={18} style={{ letterSpacing: -0.5 }}>
                  키워팜
                </Text>
              </Group>
            </UnstyledButton>

            <Group gap={28} visibleFrom="md">
              {NAV_ITEMS.map((item) => (
                <Text
                  key={item.href}
                  component={Link}
                  href={item.href}
                  size="sm"
                  fw={500}
                  c="gray.7"
                  style={{ textDecoration: 'none' }}
                  className="kw-nav-link"
                >
                  {item.label}
                </Text>
              ))}
            </Group>

            <Group gap="xs" visibleFrom="md">
              <Button
                component={Link}
                href="/onboarding"
                size="sm"
                color="green"
                rightSection={<IconArrowRight size={16} />}
              >
                지금 추천받기
              </Button>
            </Group>

            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" aria-label="메뉴" />
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="78%"
        title={
          <Group gap={8}>
            <Box
              w={26}
              h={26}
              style={{
                borderRadius: 7,
                background:
                  'linear-gradient(135deg, var(--mantine-color-green-5), var(--mantine-color-teal-6))',
                display: 'grid',
                placeItems: 'center',
                color: 'white',
              }}
            >
              <IconLeaf size={15} stroke={2.4} />
            </Box>
            <Text fw={800}>키워팜</Text>
          </Group>
        }
        hiddenFrom="md"
      >
        <Stack gap="lg" mt="md">
          {NAV_ITEMS.map((item) => (
            <Text
              key={item.href}
              component={Link}
              href={item.href}
              size="lg"
              fw={600}
              c="gray.8"
              onClick={close}
              style={{ textDecoration: 'none' }}
            >
              {item.label}
            </Text>
          ))}
          <Button
            component={Link}
            href="/onboarding"
            color="green"
            size="md"
            mt="md"
            rightSection={<IconArrowRight size={16} />}
            onClick={close}
            fullWidth
          >
            지금 추천받기
          </Button>
        </Stack>
      </Drawer>

      <style jsx global>{`
        .kw-nav-link {
          position: relative;
          transition: color 160ms ease;
        }
        .kw-nav-link:hover {
          color: var(--mantine-color-green-7) !important;
        }
        .kw-nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          background: var(--mantine-color-green-6);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 200ms ease;
        }
        .kw-nav-link:hover::after {
          transform: scaleX(1);
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-feature-settings: 'ss01', 'ss02';
        }
        .kw-feature-card {
          will-change: transform;
        }
        .kw-feature-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 18px 40px -20px rgba(34, 139, 84, 0.28),
            0 2px 6px -2px rgba(0, 0, 0, 0.06) !important;
          border-color: var(--mantine-color-green-3) !important;
        }
      `}</style>
    </>
  );
}
