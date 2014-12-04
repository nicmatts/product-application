class StaticController < ApplicationController
  def index
    @products = Product.order("name ASC")
  end
end
