import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='my-5 text-3xl uppercase font-semibold font-mono text-center'>Markdown Previewer</h1>
        <div className='grid grid-cols-2'>
          <div className='mx-4 bg-red-300'>
            <h2 className='text-2xl'>Editor</h2>
            <textarea id="editor" placeholder="Enter your markdown here" className='w-full'></textarea>
          </div>
          <div className='mx-4 bg-red-300'>
            <div id="preview">Preview</div>
          </div>
        </div>
      </main>
    </>
  )
}
