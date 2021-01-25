export type FetchedImage = {
  data: [
    {
      title: string;
    }
  ];
  links: [
    {
      href: string;
    }
  ];
};

export type ImagesArray = FetchedImage[];
