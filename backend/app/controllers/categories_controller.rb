class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories, only: [:id, :name], include: {
      cards: {
        only: [:id, :name, :url, :category_id] 
      }
    }
  end

  # GET /categories/1
  def show
    render json: @category, only: [:id, :name], include: {
      cards: {
        only: [:id, :name, :url] 
      }
    }
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: {
        status: 201,
        store: @category
      }, status: :created, location: category_path(@category)
    else
      render json: {
        status: 422,
        errors: @store.errors.full_messages.join(", ")
      }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def category_params
      params.require(:category).permit(:name)
    end
end
