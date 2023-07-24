import React from "react";

const Research = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-semibold text-teal-400 text-3xl">
        Research list
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl text-slate-950 font-semibold bg-zinc-300">
              <th>Index</th>
              <th>Research Topic</th>
              <th>Link</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="text-teal-500 font-medium text-lg hover">
              <th>1</th>
              <td>Google Scholar</td>
              <td>https://scholar.google.com/</td>
              <td>
                Google Scholar is a freely accessible search engine that indexes
                the full text or metadata of scholarly literature across an
                array of publishing formats and disciplines.
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover text-teal-500 font-medium text-lg">
              <th>2</th>
              <td>PubMed</td>
              <td>https://pubmed.ncbi.nlm.nih.gov</td>
              <td>
                PubMed is a comprehensive database that primarily focuses on
                biomedical literature, including research articles, reviews, and
                clinical studies.
              </td>
            </tr>
            {/* row 3 */}
            <tr className="text-teal-500 font-medium text-lg hover">
              <th>3</th>
              <td>JSTOR</td>
              <td>www.jstor.org</td>
              <td>
                JSTOR is a digital library providing access to thousands of
                academic journals, books, and primary sources covering various
                disciplines.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Research;
