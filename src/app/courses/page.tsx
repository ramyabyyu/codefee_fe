import React from "react";
import SeoMeta from "@/partials/SeoMeta";
import PageHeader from "@/partials/PageHeader";
import getTitle from "@/lib/utils/getTitle";

const Courses = () => {
  const title = "Courses";
  return (
    <>
      <SeoMeta title={getTitle(title)} />
      <PageHeader title={title} />
      <section className="section">
        <div className="container">
          <div className="row flex justify-center items-center">
            <div className="mx-auto md:col-10 lg:col-12">
              <div className="mb-6 w-1/2 flex justify-center">
                <select name="categories" id="categories" className="w-full">
                  <option value="" selected>
                    Pilih Kategori
                  </option>
                  <option value="Laravel">Laravel</option>
                  <option value="Javascript">Javascript</option>
                  <option value="Lumen">Lumen</option>
                  <option value="Node Js">Node Js</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
