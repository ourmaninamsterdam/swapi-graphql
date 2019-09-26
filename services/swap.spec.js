const axios = require("axios");
const SWAPI = require("./swapi");
const fixtureData = require("./fixtures");

jest.mock("axios");

describe("SWAPI service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getPeople", () => {
    describe("Given invalid input", () => {
      it("should return an error", async () => {
        const expected = "SWAPI.getPeople: Invalid 'id' supplied";
        await expect(SWAPI.getPeople()).rejects.toThrow(expected);
      });
    });

    describe("Given valid input", () => {
      describe("BUT there was a issue with the request", () => {
        it("should return an error", async () => {
          const expected = "Request failed 404 ";
          axios.get.mockImplementationOnce(() => Promise.reject(expected));
          await expect(SWAPI.getPeople("1")).rejects.toThrow(expected);
        });
      });

      it("should return the people data", async () => {
        const expected = fixtureData.people.data;
        axios.get.mockImplementationOnce(() =>
          Promise.resolve(fixtureData.people)
        );
        await expect(SWAPI.getPeople("1")).resolves.toEqual(expected);
      });
    });
  });

  describe("getFilm", () => {
    describe("Given invalid input", () => {
      it("should return an error", async () => {
        const expected = "SWAPI.getFilm: Invalid 'id' supplied";
        await expect(SWAPI.getFilm()).rejects.toThrow(expected);
      });
    });

    describe("Given valid input", () => {
      describe("BUT there was a issue with the request", () => {
        it("should return an error", async () => {
          const expected = "Request failed 404 ";
          axios.get.mockImplementationOnce(() => Promise.reject(expected));
          await expect(SWAPI.getFilm("2")).rejects.toThrow(expected);
        });
      });

      it("should return the people data", async () => {
        const expected = fixtureData.film.data;
        axios.get.mockImplementationOnce(() =>
          Promise.resolve(fixtureData.film)
        );
        await expect(SWAPI.getFilm("2")).resolves.toEqual(expected);
      });
    });
  });

  describe("getPeople", () => {
    describe("Given invalid input", () => {
      it("should return an error", async () => {
        const expected = "SWAPI.getPeople: Invalid 'id' supplied";
        await expect(SWAPI.getPeople()).rejects.toThrow(expected);
      });
    });

    describe("Given valid input", () => {
      describe("BUT there was a issue with the request", () => {
        it("should return an error", async () => {
          const expected = "Request failed 404 ";
          axios.get.mockImplementationOnce(() => Promise.reject(expected));
          await expect(SWAPI.getPeople("1")).rejects.toThrow(expected);
        });
      });

      it("should return the people data", async () => {
        const expected = fixtureData.people.data;
        axios.get.mockImplementationOnce(() =>
          Promise.resolve(fixtureData.people)
        );
        await expect(SWAPI.getPeople("1")).resolves.toEqual(expected);
      });
    });
  });

  describe("getFilmsForPerson", () => {
    describe("Given invalid input", () => {
      it("should return an error", async () => {
        const expected = "SWAPI.getPeople: Invalid 'id' supplied";
        await expect(SWAPI.getFilmsForPerson()).rejects.toThrow(expected);
      });
    });

    describe("Given valid input", () => {
      describe("BUT there was a issue with the initial request", () => {
        it("should return an error", async () => {
          const expected = "Request failed 404 ";
          axios.get.mockImplementationOnce(() => Promise.reject(expected));

          await expect(SWAPI.getFilmsForPerson("2")).rejects.toThrow(expected);
        });
      });

      describe("BUT one of the get promises failed", () => {
        it("should return an error", async () => {
          const expected = "Request failed 404 ";
          axios.get.mockImplementationOnce(() =>
            Promise.resolve(fixtureData.people)
          );
          axios.all.mockImplementationOnce(() => Promise.reject(expected));

          await expect(SWAPI.getFilmsForPerson("2")).rejects.toThrow(expected);
        });
      });

      it("should return the film data for each film", async () => {
        const expected = [
          fixtureData.film.data,
          fixtureData.film.data,
          fixtureData.film.data
        ];
        axios.get.mockImplementationOnce(() =>
          Promise.resolve(fixtureData.people)
        );
        axios.get.mockImplementation(() => Promise.resolve(fixtureData.film));
        axios.all.mockImplementationOnce(() => Promise.resolve(expected));

        await expect(SWAPI.getFilmsForPerson("2")).resolves.toEqual(expected);
      });
    });
  });
});
