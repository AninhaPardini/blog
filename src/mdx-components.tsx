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
      <blockquote 
        style=
        {{
          backgroundColor: '#EBEBEB',
          padding: '1rem',
          borderRadius: '16px',
          marginTop: '0.4rem',
          marginBottom: '1rem'
        }}
      >
        <p>{ children }</p>
      </blockquote>
    ),
    p: ({ children }) => (
      <p 
        style=
        {{
          marginBottom: '1rem'
        }}
      >
        { children }
      </p>
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
    code: ({ children }) => (
      <pre 
        style=
        {{
          backgroundColor: '#FFFDFD',
          padding: '0.875rem',
          border: '1px solid #ddd',
          pageBreakInside: 'avoid',
          overflow: 'auto',
          wordWrap: 'break-word',
          margin: '0.875rem 0',
          borderRadius: '16px'
        }}
      >
        <code>
          { children }
        </code>
      </pre>
    ),
    ...components,
  }
}
