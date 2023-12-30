function Homepage() {
  return (
    <>
      <div className="main__content--wrapper">
        <div className="main__content">
          <div className="main__content--header">
            <p className="header--result-count color-secondary">
              Found 234 countries
            </p>
            <div className="header--search color-secondary bg-shark">
              <i className="fa-solid fa-lg fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search by Name, Region, Subregion"
              />
            </div>
          </div>
          <div className="main__content--body">
            <div className="main__content--filter">
              <div className="filter__sort">
                <h4 className="secondary__color">Sort by</h4>
                <select name="sort" id="sort">
                  <option value="Population">Population</option>
                  <option value="Alphabetical Order">Alphabetical Order</option>
                  <option value="Area">Area (Km2)</option>
                </select>
              </div>
              <div className="filter__region">
                <h4 className="secondary__color">Region</h4>
                <div className="region__list">
                  <input
                    type="checkbox"
                    name="regions"
                    id="americas"
                    value="americas"
                  />
                  <label htmlFor="americas" className="region__item">
                    Americas
                  </label>
                  <input
                    type="checkbox"
                    name="regions"
                    id="antartic"
                    value="antartic"
                  />
                  <label htmlFor="antartic" className="region__item">
                    antartic
                  </label>
                  <input
                    type="checkbox"
                    name="regions"
                    id="africa"
                    value="africa"
                  />
                  <label htmlFor="africa" className="region__item">
                    africa
                  </label>
                  <input
                    type="checkbox"
                    name="regions"
                    id="asia"
                    value="asia"
                  />
                  <label htmlFor="asia" className="region__item">
                    asia
                  </label>
                  <input
                    type="checkbox"
                    name="regions"
                    id="erurope"
                    value="erurope"
                  />
                  <label htmlFor="erurope" className="region__item">
                    europe
                  </label>
                  <input
                    type="checkbox"
                    name="regions"
                    id="oceania"
                    value="oceania"
                  />
                  <label htmlFor="oceania" className="region__item">
                    oceania
                  </label>
                </div>
              </div>
              <div className="filter__status ">
                <h4>Status</h4>
                <div className="status__list text-white">
                  <div className="status__list--item">
                    <input type="checkbox" name="un" id="un" />
                    <label htmlFor="un">Member of the United Nations</label>
                  </div>
                  <div className="status__list--item">
                    <input
                      type="checkbox"
                      name="independent"
                      id="independent"
                    />
                    <label htmlFor="independent">Independent</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__content--country-list">
              <div className="country__list">
                <div className="country__table">
                  <div className="country__header">Flag</div>
                  <div className="country__header">Name</div>
                  <div className="country__header">Population</div>
                  <div className="country__header">Area (km2)</div>

                  <div className="country__list--item">
                    <img src="" alt="" />
                  </div>
                  <div className="country__list--item">China</div>
                  <div className="country__list--item">1,402,112,000</div>
                  <div className="country__list--item">9,706,961</div>

                  <div className="country__list--item">
                    <img src="" alt="" />
                  </div>
                  <div className="country__list--item">China</div>
                  <div className="country__list--item">1,402,112,000</div>
                  <div className="country__list--item">9,706,961</div>

                  <div className="country__list--item">
                    <img src="" alt="" />
                  </div>
                  <div className="country__list--item">China</div>
                  <div className="country__list--item">1,402,112,000</div>
                  <div className="country__list--item">9,706,961</div>

                  <div className="country__list--item img__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>

                  <div className="country__list--item img__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>

                  <div className="country__list--item img__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>

                  <div className="country__list--item img__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>

                  <div className="country__list--item img__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                  <div className="country__list--item  text__loading"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
