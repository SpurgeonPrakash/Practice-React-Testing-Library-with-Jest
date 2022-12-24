const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Spurgeon",
          last: "Prakash",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "spurgeonprakash",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
