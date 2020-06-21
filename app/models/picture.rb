class Picture < ApplicationRecord
   mount_uploader :src, PicturesUploader
end
