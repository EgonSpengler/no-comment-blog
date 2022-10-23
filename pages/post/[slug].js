import fs from 'fs';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs overflow-x-visible"><code>' +
               hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
               '</code></pre>';
      } catch (__) {
        alert("oopsie!");
      }
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  },
  linkify: true
});
md.linkify.set({ fuzzyEmail: false });  // disables converting email to link

// Currently default but I want to apply a better style to inline code
md.renderer.rules.code_inline = function (tokens, idx, options, env, slf) { 
  var token = tokens[idx];

  return  '<code' + slf.renderAttrs(token) + '>' + md.utils.escapeHtml(token.content) + '</code>';
};



export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose max-w-4xl mx-auto prose-theme'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
}
