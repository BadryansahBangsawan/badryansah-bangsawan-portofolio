"use client";

import React from "react";

export default function GithubLinksTable() {
  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-900 bg-black text-white">
      {/* TABEL LINK GITHUB */}
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-lg font-bold mb-4">Halo ganteng apa cari</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Table 1 */}
          <table className="w-full bg-white rounded shadow text-sm bg-black">
            <tbody>
              <tr>
                <td className="p-2">
                  https://github.com/MaklonFR/todo-list.git
                </td>
              </tr>
            </tbody>
          </table>

          {/* Table 2 */}
          <table className="w-full bg-white rounded shadow text-sm bg-black">
            <tbody>
              <tr>
                <td className="p-2">
                  https://github.com/MaklonFR/diskon-app.gi
                </td>
              </tr>
            </tbody>
          </table>

          {/* Table 3 */}
          <table className="w-full bg-white rounded shadow text-sm bg-black ">
            <tbody>
              <tr>
                <td className="p-2 text-gray">
                  https://github.com/MaklonFR/simple-calculator-app.git
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
