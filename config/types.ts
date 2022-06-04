export type GalleryItem = {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string,
  favorite: boolean
};

export type SidebarButton = {
  id: number,
  title: string,
  filter: string
}