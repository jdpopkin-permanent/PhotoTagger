class Api::PhotoTaggingsController < ApplicationController
  include Api::PhotoTaggingsHelper
  before_filter :require_current_user!, :authorized_to_tag, only: [:create]

  def create
    unless(params[:photo_tagging])
      params[:photo_tagging] = { x_pos: params[:xPos], y_pos: params[:yPos],
                          user_id: params[:userId], photo_id: params[:photoId]}
    end

    @photo_tagging = PhotoTagging.new(params[:photo_tagging])
    if @photo_tagging.save
      render json: @photo_tagging
    else
      render json: @photo_tagging, status: :unprocessable_entity
    end
  end

  def index
    @photo_taggings = PhotoTagging.where(photo_id: params[:photo_id])
    render json: @photo_taggings
  end
end
