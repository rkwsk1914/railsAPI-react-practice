module Api
  module V1
    class PicturesController < ApplicationController
      before_action :set_picture, only: [:show, :update, :destroy]

      def index
        pictures = Picture.order(created_at: :desc)
        logger.debug json: { status: 'SUCCESS', message: 'Loaded pictures', data: pictures }
        render json: { status: 'SUCCESS', message: 'Loaded pictures', data: pictures }
        
      end

      def show
        render json: { status: 'SUCCESS', message: 'Loaded the picture', data: @picture }
      end

      def create
        picture = Picture.new(picture_params)
        if picture.save
          render json: { status: 'SUCCESS', data: picture }
        else
          render json: { status: 'ERROR', data: picture.errors }
        end
      end

      def destroy
        @picture.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the picture', data: @picture }
      end

      def update
        if @picture.update(picture_params)
          render json: { status: 'SUCCESS', message: 'Updated the picture', data: @picture }
        else
          render json: { status: 'SUCCESS', message: 'Not updated', data: @picture.errors }
        end
      end

      private

      def set_picture
        @picture = Picture.find(params[:id])
      end

      def picture_params
        params.require(:picture).permit(:src)
      end
    end
  end
end
