export interface RemoveBgPayload {
  image_file_b64: string
  image_url: string
  size: string
  type: string
  type_level: string
  format: string
  roi: string
  crop: boolean
  crop_margin: string
  scale: string
  position: string
  channels: string
  add_shadow: boolean
  semitransparency: boolean
  bg_color: string
  bg_image_url: string
}
