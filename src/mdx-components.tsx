import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'
import { Children } from 'react'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 
        style=
        {{ 
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '0.4rem'
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 
        style=
        {{ 
          fontSize: '2rem', 
          fontWeight: 'bold',
          marginBottom: '0.3rem'
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 
        style={{ 
          fontSize: '1.6rem', 
          fontWeight: 'bold', 
          marginBottom: '0.3rem'
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 
        style=
        {{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold' }}
      >
        {children}
      </h4>
    ),
    li: ({ children }) => (
      <li 
        style=
        {{ 
          listStyle: 'inside', 
          textDecorationLine: 'initial',
        }}
      >
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong 
        style=
        {{ 
          fontWeight: 'bold' 
        }}
      >
        {children}
      </strong>
    ),
    a: (props) => (
      <Link 
        style=
        {{ 
          color: 'rgb(234 84 108)', 
          cursor: 'pointer' 
        }}
        target='_blank'
        {...(props as LinkProps)}
      >
      </Link>
    ),
    blockquote: ({ children }) => (
      <blockquote>
        <p>{ children }</p>
      </blockquote>
    ),
    img: (props) => (
      <Image
        width={800}
        height={500}
        style=
        {{ 
          width: '100%', 
          height: 'auto',
          borderRadius: '16px'
        }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
